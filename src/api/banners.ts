import { get } from "./axiosClient";

export const getBanner = (data) => {
    return get(`/banners?type=1&acquisitionCount=${data.acquisitionCount}&startCount=${data.startCount}`);
};
