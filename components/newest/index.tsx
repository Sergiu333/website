const Newest = () => {
    return (
        <div className="pt-[120px] container mx-auto p-[202px]">
            <div className="flex flex-row gap-[30px] tracking-[-0,24]">
                <div className="text-[#292D33] font-['Manrope'] font-extrabold text-[57px] leading-[66px] w-[540px]">
                    The <span className="text-[#185CFF]">newest</span><br/> business analytics platform
                </div>
                <div className="font-['Open Sans'] font-normal text-xl leading-[33px] w-[540px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                    <div>
                        <button className="bg-[#185CFF] py-[11px] px-[46px] rounded-md mt-[30px] text-white font-bold text-xs leading-6 font-['Manrope']">
                            Discover more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newest;