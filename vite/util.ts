import _ from 'lodash';

export function parseEnv(env: Record<string, any>) {
  const newEnv = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    transformType(key, value, newEnv)
  })
  return newEnv
}

function transformType(key: string, value: any, newEnv: any) {
  switch(value) {
    case 'true':
      newEnv[key] = true;
      break;
    case 'false':
      newEnv[key] = false;
      break;
  }
  if (/^\d+$/.test(value)) {
    newEnv[key] = parseInt(value)
  }
}