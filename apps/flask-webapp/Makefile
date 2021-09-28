REGISTRY=ch0ppy35
VERSION ?= latest
IMAGE_NAME ?= basic-flask-app
CONTAINER_NAME ?= basic-flask-app
CONTAINER_INSTANCE ?= default

.PHONY: run build tag push release

run:
	flask run

build: 	Dockerfile
	docker build -t $(IMAGE_NAME):$(VERSION) -f Dockerfile .

tag:
	docker tag $(IMAGE_NAME):$(VERSION) $(REGISTRY)/$(IMAGE_NAME):$(VERSION)

push:
	docker push $(REGISTRY)/$(IMAGE_NAME):$(VERSION)

release: build
	make push -e VERSION=$(VERSION)
    
default: build