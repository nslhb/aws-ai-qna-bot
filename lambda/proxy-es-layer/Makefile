NAME=$(shell basename $(shell pwd))
DST=../../build/lambda/$(NAME).zip

RESOURCES := $(shell  find . | grep -v node_modules | grep -v test )

$(DST): $(RESOURCES) 
	echo "Building $(NAME)"; 
	npm install 
	rm -r ./nodejs || True
	mkdir ./nodejs || True
	mv node_modules ./nodejs/node_modules 
	mkdir ./nodejs/node_modules/lib
	cp  ./lib/* ./nodejs/node_modules/lib
	zip -r $(DST) .
