import { router } from './router'

useTitle(
	() => {
		const { path, meta } = router.currentRoute.value
		if (meta.title) {
			return `服务状态`
		}
		if (path === '/') {
			return ''
		}
		return path.replaceAll('/', '')
	},
	{
		titleTemplate: `${import.meta.env.VITE_APP_TITLE} %s`,
	},
)
