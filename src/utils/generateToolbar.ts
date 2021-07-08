import { PrettyDecentToolbarOption } from '../pretty';
import { toolbarConfig } from './toolbarConfig';

const findConfig = (option: PrettyDecentToolbarOption) => {
    return toolbarConfig[option];
};
export const generateToolbar = (options: PrettyDecentToolbarOption[]) => options.map((option) => findConfig(option));
