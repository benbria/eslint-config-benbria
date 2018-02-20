## For ES6 Projects

Copy and paste this into your shell:

```
npm info "eslint-config-benbria@latest" peerDependencies --json | \
    command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "eslint-config-benbria@latest"
echo '{"extends": "benbria"}' > .eslintrc
```

Or, for yarn:

```
npm info "eslint-config-benbria@latest" peerDependencies --json | \
    command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "eslint-config-benbria@latest"
echo '{"extends": "benbria"}' > .eslintrc
```
