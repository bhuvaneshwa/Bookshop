import Membership from "./Membership";

const HomeSection = () => {
    return (
      <div>

<section className="pt-20 bg-cover bg-gray-200 bg-center h-[30rem] relative" style={{backgroundImage: `url('./img/banner-bg.jpg')`}} id="home">
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-1/2 p-5">
            <div className="content flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold text-black">Books Feed Your Soul</h3>
              <p className="text-base text-gray-700 leading-relaxed my-4 text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ipsam
                et maxime libero inventore placeat illo, illum deserunt rem aperiam
                fuga repudiandae distinctio quo odio sit perspiciatis vero
                laudantium minima.
              </p>
              <a href="#populer" className="btn bg-[#606c38] text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-secondaryColor hover:text-white">Shop Now !</a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* Add content for the second half of the hero section here */}
            {/* For example, you can add an image */}
            <img src="/path/to/image" alt="Hero Image" className="w-full h-auto" />
          </div>
        </div>
      </section>
           <section className="dark:bg-gray-100 dark:text-gray-800" id="reviews">
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 className="text-4xl font-bold">Duo assum utroque appetere an</h2>
				<p className="dark:text-gray-600">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
			</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-50">
							<p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-50">
							<p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-50">
							<p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-50">
							<p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Membership/>
      </div>
      

      
    );
  }
  
  export default HomeSection;
  