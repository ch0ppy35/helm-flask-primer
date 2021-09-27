# Makefile
#

.PHONY: deploy ## Deploy using Helm
deploy:
	helm upgrade --install k8s-flask-react k8s-flask-react/

.PHONY: test ## Run Helm tests
test:
	helm test k8s-flask-react

.PHONY: uninstall ## Remove Helm deployment
uninstall:
	helm uninstall k8s-flask-react