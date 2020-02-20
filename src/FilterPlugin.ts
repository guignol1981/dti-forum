import { PluginObject } from "vue/types/umd";
import Vue from "vue";

const FilterPlugin: PluginObject<void> = {
  install: (): void => {
    Vue.filter(
      "truncate",
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      (value: string, to: number = 10, ellipsis: string = "..."): string => {
        if (value.length <= to) {
          return value;
        }
        return value.slice(0, to) + ellipsis;
      }
    );
  }
};

export default FilterPlugin;
