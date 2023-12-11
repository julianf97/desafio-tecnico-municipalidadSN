export const regularExpressionEmail = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[09]{1,3}\.[09]{1,3}\.[09]{1,3}\.[09]{1,3}])|(([a-zA-Z\-09]+\.)+[a-zA-Z]{2,}))$/;

export const regularExpressionPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/;

export const regularExpressionName = /^[A-Za-z]+$/