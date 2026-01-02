# dependencies

node/npm

npx

# env setup

npm install

python -m venv env

pip install -r requirements.txt

source env/bin/activate

# local raw vite 

requires 2 different terminals

python src/backend/app.py

npx vite


# local docker build

sudo docker ps -a 

<retrieve container ID>

sudo docker rm -f <container ID>

sudo docker build -t country-flags .

sudo docker run -d -p 8080:80 --name flags-continer country-flags

http://localhost:8080


# aws build

sudo aws login

sudo aws ecr get-login-password --region us-east-1 | sudo docker login --username AWS --password-stdin 992382747916.dkr.ecr.us-east-1.amazonaws.com

sudo docker tag country-flags:latest 992382747916.dkr.ecr.us-east-1.amazonaws.com/country-flags:latest

sudo docker push 992382747916.dkr.ecr.us-east-1.amazonaws.com/country-flags:latest

http://country-flags-136189765.us-east-1.elb.amazonaws.com/