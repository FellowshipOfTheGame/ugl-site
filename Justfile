build:
    - rm -fr ./dist ./ugl-site.zip
    pnpm install
    pnpm run build
    cp -r ./dist ./ugl
    zip ugl-site.zip -r ./ugl
    rm -fr ./ugl
