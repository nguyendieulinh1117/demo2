import * as React from 'react';

function RecruitmentTab() {
    return ( 
        <>
            {/* start tuyển dụng */}
            <div className="tab-pane" id="tab-tuyen-dung" role="tabpanel" aria-labelledby="tab-recruitment">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-9 py-4">
                            <div className="row py-2 py-md-4">
                                <div className="col-md-6 pb-4 pb-md-0">
                                    <img src="../assets/img/about-us/Prepare-2.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <p className="mb-3 bigger">YOU BELONG AT POPEYES!</p>
                                    <div className="nomal text-grey-dark">
                                        <p>
                                            Why Popeyes? Because here, you can Bring IT ALL to the table...your personality, panache, and unscripted sense of
                                            possibility seasoned with your spirit of service to others. We're more than just great food – we're about loving what
                                            you do and sharing that genuine hospitality with everyone who walks in the door.
                                            Routine is tasteless. Bland is easy. You're a key ingredient in an incredible family recipe that, without you, just
                                            wouldn't taste right.
                                        </p>
                                    </div>
                                    {/* start separator */}
                                    <div className="w-100 border-bottom-solid border-md-none border-grey-lighter mt-4">
                                    </div>
                                    {/* end separator */}
                                </div>
                            </div>
                            <div className="row py-2 py-md-4 flex-wrap-reverse">
                                <div className="col-md-6">
                                    <p className="mb-3 bigger">Tuyển dụng tại miền Bắc</p>
                                    <div className="nomal text-grey-dark">
                                        <ul className="list-unstyled">
                                            <li>1. Nhân viên phục vụ:
                                                <p>Trình độ: tốt nghiệp PTTH, từ đủ 18 tuổi trở lên.</p>
                                                <p>Ưu tiên các bạn nam, có thể đi giao hàng và làm được đến 11h30 tối.</p>
                                                <p>Khả năng giao tiếp Anh văn cơ bản.</p>
                                            </li>
                                            <li>2. Quản lý/Trợ lý/Giám sát ca nhà hàng:
                                                <p>Trình độ học vấn tối thiểu: tốt nghiệp Cao đẳng / Đại học.</p>
                                                <p>
                                                    Kinh nghiệm: ít nhất có 3-5 năm kinh nghiệm trong ngành quản lý (ưu tiên các ứng viên đã từng làm việc trong ngành F&amp;B,
                                                    có kiến thức làm việc trong môi trường nhà hàng / dịch vụ…)
                                                </p>
                                                <p>Kỹ năng quản lý tốt, học hỏi nhanh.</p>
                                                <p>Khả năng giao tiếp anh văn cơ bản.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 pb-4 pb-md-0">
                                    <img src="../assets/img/about-us/Prepare-1.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end tuyển dụng */}
        </>
    );
}

export default RecruitmentTab;