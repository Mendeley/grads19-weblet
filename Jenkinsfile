pipeline {
    agent {
        node {
            label 'confound'
        }
    }
    stages {
        stage ('checkout git') {
            steps {
              checkout scm
            }
        }
        stage ('ecr login') {
            steps {
                sh script:"""#!/bin/sh
                eval \$(aws ecr get-login --no-include-email --registry-ids 620835497377 --region eu-west-1)
                """
            }
        }
        stage ('docker build and push') {
            steps {
                ansiColor('xterm') {
                    sh script:"""
                    docker build -t 620835497377.dkr.ecr.eu-west-1.amazonaws.com/reactfe -t 620835497377.dkr.ecr.eu-west-1.amazonaws.com/reactfe:latest .
                    docker push 620835497377.dkr.ecr.eu-west-1.amazonaws.com/reactfe:latest
                    """
                }
            }
        }
        stage ('deploy') {
            steps {
                ansiColor('xterm') {
                 sh """#!/bin/bash
                    TEMP_CRED=\$(aws sts assume-role --role-arn arn:aws:iam::620835497377:role/cross-account-access-jenkins --role-session-name test-account-jenkins)
                    export AWS_ACCESS_KEY_ID=\$(echo \${TEMP_CRED} | jq -r .Credentials.AccessKeyId)
                    export AWS_SECRET_ACCESS_KEY=\$(echo \${TEMP_CRED} | jq -r .Credentials.SecretAccessKey)
                    export AWS_SESSION_TOKEN=\$(echo \${TEMP_CRED} | jq -r .Credentials.SessionToken)
                    aws eks update-kubeconfig --name eks_cluster --region eu-west-1
                    kubectl set image deployment/reactdeploy reactfe=620835497377.dkr.ecr.eu-west-1.amazonaws.com/reactfe:latest
                 """
                }
            }
        }
    }
}