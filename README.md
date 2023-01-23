# web-app

Commands:

1.  docker build -t webapp .
2.  docker tag web-app us.gcr.io/main-aura-375015/web-app:v1.0
3.  gcloud auth configure-docker
4.  docker push us.gcr.io/main-aura-375015/web-appg:v1.0
5.  <Edit student-app-client-deployment.yaml latest version>
6.  kubectl apply -f k8s/student-app-client-deployment.yaml
