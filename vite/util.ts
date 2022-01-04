import _ from 'lodash';

export function parseEnv(env: Record<string, any>): ViteEnv {
  const newEnv: any = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    transformType(newEnv, key, value)
  })
  return newEnv
}

function transformType(newEnv: any, key: string, value: any) {
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