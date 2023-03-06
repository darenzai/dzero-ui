import request from '/@/utils/request';

export function getPage(query) {
	return request({
		url: '/admin/wx-material/page',
		method: 'get',
		params: query,
	});
}

export function addObj(obj) {
	return request({
		url: '/admin/wx-material/materialNews',
		method: 'post',
		data: obj,
	});
}

export function materialNewsUpdate(obj) {
	return request({
		url: '/admin/wx-material/materialNews',
		method: 'put',
		data: obj,
	});
}

export function getObj(id) {
	return request({
		url: '/admin/wx-material/' + id,
		method: 'get',
	});
}

export function delObj(query) {
	return request({
		url: '/admin/wx-material',
		method: 'delete',
		params: query,
	});
}

export function putObj(obj) {
	return request({
		url: '/admin/wx-material',
		method: 'put',
		data: obj,
	});
}

export function getMaterialOther(query) {
	return request({
		url: '/admin/wx-material/materialOther',
		method: 'get',
		params: query,
		responseType: 'blob',
	});
}

export function getMaterialVideo(query) {
	return request({
		url: '/admin/wx-material/materialVideo',
		method: 'get',
		params: query,
	});
}

export function getTempMaterialOther(query) {
	return request({
		url: '/admin/wx-material/tempMaterialOther',
		method: 'get',
		params: query,
		responseType: 'blob',
	});
}
