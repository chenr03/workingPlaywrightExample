run:
	npx playwright test


show:
	npx playwright show-report

trace:
	npx playwright show-trace trace.zip

init:
	npm init playwright@latest

generate:
	npx playwright codegen demo.playwright.dev/todomvc

