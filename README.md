# web-app

Commands:

1.  docker build -t us.gcr.io/main-aura-375015/web-app:v1.0 --no-cache .
2.  gcloud auth configure-docker
3.  docker push us.gcr.io/main-aura-375015/web-app:v1.0
4.  <Edit  latest version> pet-web-app-deployment.yaml
5.  <Optional> kubectl delete deploy pet-web-app
6.  kubectl apply -f k8s/pet-web-app-deployment.yaml
