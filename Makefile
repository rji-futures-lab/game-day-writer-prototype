.PHONY: deploy update servelocal

deploy:
	aws --profile rji-futures-lab s3 mb s3://game-day-writer-prototype/
	aws --profile rji-futures-lab s3 website s3://game-day-writer-prototype/ --index-document index.html
	# upload the content
	make update

update:
	aws --profile rji-futures-lab s3 rm s3://game-day-writer-prototype/ --recursive
	aws --profile rji-futures-lab s3 sync img/ s3://game-day-writer-prototype/img/ --acl public-read
	aws --profile rji-futures-lab s3 sync css/ s3://game-day-writer-prototype/css/ --acl public-read
	aws --profile rji-futures-lab s3 sync js/ s3://game-day-writer-prototype/js/ --acl public-read
	aws --profile rji-futures-lab s3 cp index.html s3://game-day-writer-prototype/index.html --acl public-read

servelocal:
	python3 -m http.server
