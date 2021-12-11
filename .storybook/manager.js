import { addons } from '@storybook/addons'
import { create, themes } from '@storybook/theming'

addons.setConfig({
    theme: create({
        base: themes.light,
        brandTitle: 'ACME',
    })
})