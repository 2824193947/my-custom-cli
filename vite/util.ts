import _ from 'lodash';

export function parseEnv(env: Record<string, any>) {
  const newEnv = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    transformType(key, value, newEnv)
  })
  return newEnv
}

function transformType(key: string, value: any, newEnv: any) {
  if (value === 'true' || value === 'false') {
    newEnv[key] = value === 'true' ? true : false;
  }
  if (/^\d+$/.test(value)) {
    newEnv[key] = parseInt(value)
  }
}