export const parseDataSource = (state, dataSource, key) => {
  state[key + "NoMore"] = Boolean(dataSource.length == 0 || dataSource.length < state[key + "Filter"].limit)
  let isNext = getVOK(state, `${key}Filter.find._id.$lt`) || getVOK(state, `${key}Filter.find._id.$gt`);
  if (isNext) {
    state[key] = state[key].concat(dataSource)
  } else {
    return {
      ...state,
      [key]: dataSource
    }
  }
  return {
    ...state
  };
}

export const getVOO = (obj, keys) => {
  if (!obj || !keys)
    return;
  keys = keys.split(".");
  let value = obj;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i]) {
      value = obj[keys[i]]
    } else {
      return value;
    }
  }
  return value;
}

export const updateElement = (dataSource, key, obj, keepOn) => {
  if (!dataSource || !obj)
    return;
  for (let i = 0; i < dataSource.length; i++) {
    if (getVOO(dataSource[i], key) == getVOO(obj, key)) {
      Object.assign(dataSource[i], obj);
      if (!keepOn)
        return dataSource[i];
      }
    }
}

export const deleteElement = (dataSource, key, value, keepOn) => {
  if (!dataSource || !value)
    return;
  value = typeof value == "object" ? getVOO(value, key) : value;
  for (let i = 0; i < dataSource.length; i++) {
    if (getVOO(dataSource[i], key) == value) {
      dataSource.splice(i, 1);
      i--;
      if (!keepOn)
        return dataSource;
      }
    }
  return dataSource;
}
