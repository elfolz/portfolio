self.addEventListener('install', event => {
	self.skipWaiting()
})

self.addEventListener('fetch', event => {
	event.respondWith(caches.open('Elfolz').then(cache => {
		cache.match(event.request)
		.then(cachedResponse => {
			const cachedFile = cachedResponse.clone().blob()
			const fetchedResponse = fetch(event.request)
			.then(networkResponse => {
				if (networkResponse.status == 200) cache.put(event.request, networkResponse.clone())
				Promise.all([
					cachedFile,
					networkResponse.clone().blob()
				]).then(response => {
					if (!event.clientId) return
					if (response[0]?.size === response[1]?.size) return
					self.clients.get(event.clientId)
					.then(client => {
						client?.postMessage('update')
					})
				})
				return networkResponse
			})
			return cachedResponse || fetchedResponse
		})
		.catch(() => {
			return fetch(event.request)
		})
	}))
})