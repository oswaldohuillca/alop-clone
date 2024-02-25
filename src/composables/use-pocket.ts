import PocketBase from 'pocketbase'

export const usePocketBase = () => {

  const { pocketbase } = useAppConfig()

  const pb = new PocketBase(pocketbase)
  return pb
}
