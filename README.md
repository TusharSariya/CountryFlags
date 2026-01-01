sudo docker build -t country-flags .

sudo docker run -d -p 8080:80 --name flags-continer country-flags

http://localhost:8080

sudo aws login

sudo aws ecr get-login-password --region us-east-1 | sudo docker login --username AWS --password-stdin 992382747916.dkr.ecr.us-east-1.amazonaws.com

sudo docker tag country-flags:latest 992382747916.dkr.ecr.us-east-1.amazonaws.com/country-flags:latest

sudo docker push 992382747916.dkr.ecr.us-east-1.amazonaws.com/country-flags:latest