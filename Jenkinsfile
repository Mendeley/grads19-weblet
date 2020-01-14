pipeline {
    agent {
        node {
            label 'confound'
        }
    }
    stages {
        stage ('checkout git') {
            steps {
              //  git credentialsId: 'jenkins-gitlab', branch: 'GP19-156_deployment', url: 'git@github.com:Mendeley/grads19-weblet.git'
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
                 sh """
                    aws eks update-kubeconfig --name eks_cluster --region eu-west-1
                    kubectl set image deployment/reactdeploy reactfe=620835497377.dkr.ecr.eu-west-1.amazonaws.com/reactfe:latest
                 """
                }
            }
        }
    }
}