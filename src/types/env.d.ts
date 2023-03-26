interface ImportMetaEnv {
    VITE_MODE_NAME: string,
    VITE_APP_API: string
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
