const className = 'image-loader'

const setLoadingStyles = (node, borderRadius) => {
	if (borderRadius) {
		node.style.borderRadius = borderRadius
	}
	node.classList.add(className)
}

const imageLoader = (node, borderRadius = '') => {
	setLoadingStyles(node, borderRadius)

	const onLoad = () => {
		node.style.borderRadius = null
		node.classList.remove(className)
	}

	const onError = () => {
		setLoadingStyles(node, borderRadius)
	}

	node.addEventListener('load', onLoad)
	node.addEventListener('error', onError)

	return {
		destroy() {
			node.removeEventListener('load', onLoad)
			node.removeEventListener('error', onError)
		},
	}
}

export default imageLoader
