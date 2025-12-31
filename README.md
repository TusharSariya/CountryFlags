sudo docker build -t country-flags .

sudo docker run -d -p 8080:80 --name flags-continer country-flags

http://localhost:8080
