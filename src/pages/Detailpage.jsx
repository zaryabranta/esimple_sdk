import React from 'react';

function DetailPage(){
	return(
		<>
			<div class="min-h-screen bg-white">
				<header class="sticky top-0 z-50 bg-white border-b border-neutral-200 px-4 py-3">
					<div class="flex items-center justify-between max-w-2xl mx-auto">
						<button class="flex items-center gap-2 text-neutral-900 hover:text-neutral-600">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-5 h-5" aria-hidden="true">
								<path d="m12 19-7-7 7-7"></path>
								<path d="M19 12H5"></path>
							</svg>
							<span>Back</span>
						</button>

						<button class="flex items-center gap-2 relative">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-5 h-5" aria-hidden="true">
								<circle cx="8" cy="21" r="1"></circle>
								<circle cx="19" cy="21" r="1"></circle>
								<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
							</svg>
						</button>
					</div>
				</header>

				<div class="max-w-2xl mx-auto">
					<div class="px-4 pt-6 pb-4">
						<div class="flex items-center gap-3 mb-2">
							<span class="text-4xl">🇨🇳</span>
							<h1 class="text-neutral-900">eSIM for China</h1>
						</div>

						<p class="text-neutral-600">Get an eSIM card for China and enjoy reliable, high-speed and affordable internet access on your trip.</p>
					</div>

					<div class="px-4 pb-6 space-y-6">
						<div>
							<h2 class="text-neutral-900 mb-3">How long is your trip?</h2>

							<div class="flex gap-2 flex-wrap">
								<button class="px-4 py-2 rounded-full border transition-colors bg-neutral-900 text-white border-neutral-900">7 Days</button>
								<button class="px-4 py-2 rounded-full border transition-colors bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900">15 Days</button>
								<button class="px-4 py-2 rounded-full border transition-colors bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900">30 Days</button>
								<button class="px-4 py-2 rounded-full border transition-colors bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900">30+ Days</button>
							</div>
						</div>

						<div>
							<h2 class="text-neutral-900 mb-4">Popular Packages</h2>

							<div class="grid grid-cols-2 gap-3">
								<button class="relative w-full rounded-xl p-3 transition-all text-left bg-neutral-50 text-neutral-900 hover:bg-neutral-100 border border-neutral-200">
									<div class="absolute -top-2 left-2 bg-amber-400 text-neutral-900 text-xs px-2 py-0.5 rounded-full">Popular</div>
									
									<div class="space-y-1">
										<div class="text-xl text-neutral-900">1 GB</div>
										<div class="text-xs text-neutral-600">Valid for 7 days</div>
										<div class="text-base mt-2 text-neutral-900">PKR 242</div>
										<div class="text-xs text-neutral-500">RTK-1 GB-1D</div>
									</div>
								</button>

								<button class="relative w-full rounded-xl p-3 transition-all text-left bg-neutral-50 text-neutral-900 hover:bg-neutral-100 border border-neutral-200">
									<div class="absolute -top-2 left-2 bg-amber-400 text-neutral-900 text-xs px-2 py-0.5 rounded-full">Popular</div>

									<div class="space-y-1">
										<div class="text-xl text-neutral-900">5 GB</div>
										<div class="text-xs text-neutral-600">Valid for 7 days</div>
										<div class="text-base mt-2 text-neutral-900">PKR 707</div>
										<div class="text-xs text-neutral-500">RTK-5 GB-1D</div>
									</div>
								</button>
							</div>
						</div>

						<div>
							<h2 class="text-neutral-900 mb-4">Available Packages</h2>

							<div class="grid grid-cols-2 gap-3">
								<button class="relative w-full rounded-xl p-3 transition-all text-left bg-neutral-50 text-neutral-900 hover:bg-neutral-100 border border-neutral-200">
									<div class="space-y-1">
										<div class="text-xl text-neutral-900">2 GB</div>
										<div class="text-xs text-neutral-600">Valid for 7 days</div>
										<div class="text-base mt-2 text-neutral-900">PKR 364</div>
										<div class="text-xs text-neutral-500">RTK-2 GB-1D</div>
									</div>
								</button>

								<button class="relative w-full rounded-xl p-3 transition-all text-left bg-neutral-50 text-neutral-900 hover:bg-neutral-100 border border-neutral-200">
									<div class="space-y-1">
										<div class="text-xl text-neutral-900">4 GB</div>
										<div class="text-xs text-neutral-600">Valid for 15 days</div>
										<div class="text-base mt-2 text-neutral-900">PKR 909</div>
										<div class="text-xs text-neutral-500">KG-4 GB-15D</div>
									</div>
								</button>

								<button class="relative w-full rounded-xl p-3 transition-all text-left bg-neutral-50 text-neutral-900 hover:bg-neutral-100 border border-neutral-200">
									<div class="space-y-1">
										<div class="text-xl text-neutral-900">8 GB</div>
										<div class="text-xs text-neutral-600">Valid for 30 days</div>
										<div class="text-base mt-2 text-neutral-900">PKR 1616</div>
										<div class="text-xs text-neutral-500">KG-8 GB-7D</div>
									</div>
								</button>
							</div>
						</div>

						<div class="bg-neutral-50 rounded-lg p-4 flex gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" aria-hidden="true">
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M12 16v-4"></path>
								<path d="M12 8h.01"></path>
							</svg>

							<div class="text-sm text-neutral-600">
								<p class="mb-1">Can I activate my plan later?</p>
								<p>All plans have a 90-day activation period. If you get a plan today and don't activate it until May 31, it will be activated automatically.</p>
							</div>
						</div>

						<div class="space-y-3 sticky bottom-0 bg-white pt-4 pb-6">
							<button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-4 py-2 has-[&gt;svg]:px-3 w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg" disabled="">Add to Cart (0)</button>
							<button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 py-2 has-[&gt;svg]:px-3 w-full h-12 rounded-lg border-neutral-300">Go to Checkout</button>
							<button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 px-4 py-2 has-[&gt;svg]:px-3 w-full h-12 rounded-lg text-neutral-900">Check Device Compatibility</button>
						</div>

						<div dir="ltr" data-orientation="horizontal" data-slot="tabs" class="flex flex-col gap-2 w-full">
							<div role="tablist" aria-orientation="horizontal" data-slot="tabs-list" class="text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] w-full grid grid-cols-3 bg-neutral-100" tabindex="0" data-orientation="horizontal" style={{outline: 'none'}}>
								<button type="button" role="tab" aria-selected="true" aria-controls="radix-:r4:-content-features" data-state="active" id="radix-:r4:-trigger-features" data-slot="tabs-trigger" class="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Key features</button>
								<button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4:-content-description" data-state="inactive" id="radix-:r4:-trigger-description" data-slot="tabs-trigger" class="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Description</button>
								<button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4:-content-technical" data-state="inactive" id="radix-:r4:-trigger-technical" data-slot="tabs-trigger" class="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Technical details</button>
							</div>

							<div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:r4:-trigger-features" id="radix-:r4:-content-features" tabindex="0" data-slot="tabs-content" class="flex-1 outline-none mt-4" style={{animationDuration: '0s'}}>
								<ul class="space-y-3">
									<li class="flex gap-2 text-neutral-700">
										<span class="text-neutral-900">•</span>
										<span>Affordable data plans, starting from PKR 563.</span>
									</li>

									<li class="flex gap-2 text-neutral-700">
										<span class="text-neutral-900">•</span>
										<span>Reliable connection from China best networks.</span>
									</li>

									<li class="flex gap-2 text-neutral-700">
										<span class="text-neutral-900">•</span>
										<span>Works with all eSIM-compatible smartphones.</span>
									</li>

									<li class="flex gap-2 text-neutral-700">
										<span class="text-neutral-900">•</span>
										<span>Easy activation with QR code scanning.</span>
									</li>

									<li class="flex gap-2 text-neutral-700">
										<span class="text-neutral-900">•</span>
										<span>24/7 customer support available.</span>
									</li>

									<li class="flex gap-2 text-neutral-700">
										<span class="text-neutral-900">•</span>
										<span>No physical SIM card needed.</span>
									</li>

									<li class="flex gap-2 text-neutral-700">
										<span class="text-neutral-900">•</span>
										<span>Instant delivery via email.</span>
									</li>
								</ul>
							</div>

							<div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:r4:-trigger-description" hidden="" id="radix-:r4:-content-description" tabindex="0" data-slot="tabs-content" class="flex-1 outline-none mt-4"></div>
							<div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:r4:-trigger-technical" hidden="" id="radix-:r4:-content-technical" tabindex="0" data-slot="tabs-content" class="flex-1 outline-none mt-4"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DetailPage;