import fetch from 'utils/fetch';
export function getNavigation() {
  const data = {
  };
  return fetch({
    url: '/api/navigation/getNavigation',
    method: 'post',
    data
  });
}

export function getCategoryAll() {
  const data = {
  };
  return fetch({
    url: '/api/category/getCategoryAll',
    method: 'post',
    data
  });
}
export function getCategoryGroup() {
  const data = {
  };
  return fetch({
    url: '/api/category/getCategoryGroup',
    method: 'post',
    data
  });
}
export function getGoods() {
  const data = {
  };
  return fetch({
    url: '/api/goods/getGoods',
    method: 'post',
    data
  });
}
export function addCarousel(formItem) {
  const data = {
    formItem: formItem
  };

  if (formItem.url == "" || formItem.url == null) {
    delete formItem['url'];
  }
  console.info(formItem.id);
  if(formItem.id == '' || formItem.id == null || formItem.id == 0 || formItem.id == '0') {
    return fetch({
      url: '/api/user/addCarousel',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/user/updateCarousel',
      method: 'post',
      data
    });
  }
}
export function addVerication(formItem) {
  const data = {
    formItem: formItem
  };
  console.info(formItem.formItem.id);
  if(formItem.formItem.id == '' || formItem.formItem.id == null || formItem.formItem.id == 0 || formItem.formItem.id == '0') {
    return fetch({
      url: '/api/user/addVerication',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/user/updateVerication',
      method: 'post',
      data
    });
  }
}
export function addImage(formItem) {
  const data = {
    formItem: formItem
  };

  if (formItem.url == "" || formItem.url == null) {
    delete formItem['url'];
  }
  console.info(formItem.id);
  if(formItem.id == '' || formItem.id == null || formItem.id == 0 || formItem.id == '0') {
    return fetch({
      url: '/api/image/addImage',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/user/updateImage',
      method: 'post',
      data
    });
  }
}
export function addGoods(formItem) {
  const data = {
    formItem: formItem
  };

  console.info(formItem.id);
  if(formItem.id == '' || formItem.id == null) {
    return fetch({
      url: '/api/goods/addGoods',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/goods/updateGoods',
      method: 'post',
      data
    });
  }
}
export function getCategoryById(data) {
  const data1 = {
    id: data.id
  };
  console.info(data1);
  return fetch({
    url: '/api/category/getCategoryById',
    method: 'post',
    data: data1
  });
}
export function getGoodsByCategoryId(data) {
  const data1 = {
    id: data.id
  };
  console.info(data1);
  return fetch({
    url: '/api/goods/getGoodsByCategoryId',
    method: 'get',
    params: data1
  });
}
export function getVericationBylevel(data) {
  const data1 = {
    level: data.level
  };
  console.info(data1);
  return fetch({
    url: '/api/user/getVericationBylevel',
    method: 'post',
    data: data1
  });
}
export function getGoodsById(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/goods/getGoodsById',
    method: 'get',
    data: data
  });
}
export function addNavigation(formItem) {
  const data = {
    formItem: formItem
  };

  if (formItem.url == "" || formItem.url == null) {
    delete formItem['url'];
  }
  console.info(formItem.id);
  if(formItem.id == '' || formItem.id == null) {
    return fetch({
      url: '/api/navigation/addNavigation',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/navigation/updateNavigation',
      method: 'post',
      data
    });
  }
}
export function addcategory(formItem) {
  const data = {
    formItem: formItem
  };
  console.info(formItem.id);
  if(formItem.id == '' || formItem.id == null) {
    return fetch({
      url: '/api/category/addcategory',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/category/updateCategory',
      method: 'post',
      data
    });
  }
}
export function deleteCategory(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/category/deleteCategory',
    method: 'post',
    data
  });
}
export function getCategoryParent() {
  const data = {
  };
  return fetch({
    url: '/api/category/getCategoryParent',
    method: 'post',
    data
  });
}
export function deleteCarouser(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/user/deleteCarouser',
    method: 'post',
    data
  });
}
export function deleteVerifiaction(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/user/deleteVerifiaction',
    method: 'post',
    data
  });
}

export function deleteGoods(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/goods/deleteGoods',
    method: 'post',
    data
  });
}

export function deleteNavigation(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/user/deleteNavigation',
    method: 'post',
    data
  });
}
export function getCarouser(id) {
  const data = {
  };
  return fetch({
    url: '/api/getCarouser',
    method: 'post',
    data
  });
}
export function getCarouserAll() {
  const data = {
  };
  return fetch({
    url: '/api/user/getCarouserAll',
    method: 'post',
    data
  });
}
export function getVericationAll() {
  const data = {
  };
  return fetch({
    url: '/api/user/getVericationAll',
    method: 'post',
    data
  });
}
export function getImageAll() {
  const data = {
  };
  return fetch({
    url: '/api/image/getImageAll',
    method: 'post',
    data
  });
}

export function getUser(password) {
  const data = {
  };
  return fetch({
    url: '/user/getUser',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}
