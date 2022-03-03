import { get } from "./axiosClient";

export const getPromtionList = (data: any) => {
    return get(`/contents?type=1&acquisitionCount=${data.acquisitionCount}&startCount=${data.startCount}`);
};

export const getPromotionDetail = (slug: any) => {
    return get(`/contents/${slug}`);
};
