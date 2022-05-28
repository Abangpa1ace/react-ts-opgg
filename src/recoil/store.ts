import { getItemsInfo } from "@/services";
import { selector } from "recoil";

export const itemsInfoSelector = selector<ItemsInfoDto>({
  key: 'itemsInfo',
  get: async ({ get }) => {
    const info = await getItemsInfo();
    return info
  }
})