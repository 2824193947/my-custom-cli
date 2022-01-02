import { RouteRecordRaw } from "vue-router";

// layout路由
const layouts = import.meta.globEager('../layouts/*.vue')
// 子路由
const views = import.meta.globEager('../views/*/*.vue')

function getRoutes() {
	const layoutsRoutes = [] as RouteRecordRaw[]
	// entries返回对象可迭代对象
	Object.entries(layouts).forEach(([files, moudle]) => {
		const route = getRouteByMoudle(files, moudle)
		route.children = getChildRoutes(route)
		layoutsRoutes.push(route)
	})
	return layoutsRoutes
}

function getChildRoutes(layoutRoute: RouteRecordRaw) {
	const layoutsRoutes = [] as RouteRecordRaw[]
	Object.entries(views).forEach(([files, moudle]) => {
		if (files.includes(layoutRoute.name as string)) {
			const route = getRouteByMoudle(files, moudle)
			layoutsRoutes.push(route)
		}
	})
	return layoutsRoutes
}

// 生成路由对象
function getRouteByMoudle(files: string, moudle: {[key: string]: any}) {
	// 使用正则比配
	const name = files.replace(/.+layouts\/|.+views\/|\.vue/g, '')
	const route = {
		name: name.replace('/', '.'),
		path: `/${name}`,
		component: moudle.default,
	} as RouteRecordRaw
	return route
}

export default getRoutes()
