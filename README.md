# create network envoy
docker create network my-net
# run envoy
sudo docker run --name envoy -d -p 80:8080 -p 9901:9901 -v ${PWD}:/etc/envoy --network my-net envoyproxy/envoy-alpine:v1.16.0
