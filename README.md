# web-app

Node : 14.15.1

Pre:

1. nvm use 14.15.1 x64
2. node -v

Commands:

3. docker build -t us.gcr.io/main-aura-375015/web-app:v1.0 --no-cache .
4. gcloud auth configure-docker
5. docker push us.gcr.io/main-aura-375015/web-app:v1.0
6. <Edit  latest version> pet-web-app-deployment.yaml
7. <Optional> kubectl delete deploy pet-web-app
8. kubectl apply -f k8s/pet-web-app-deployment.yaml
