make install:
	nmp install
make start:
	node bin/brain-games.js
make publish:
	npm publish --dry-run
make lint:
	npx eslint .