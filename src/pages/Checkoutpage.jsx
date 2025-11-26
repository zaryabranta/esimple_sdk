import React from 'react';

function CheckoutPage(){
	return(
		<>
			<div class="min-h-screen bg-neutral-50">
				<header class="bg-white border-b border-neutral-200 px-4 py-4">
					<div class="max-w-6xl mx-auto">
						<div class="flex items-center gap-3">
							<button class="text-neutral-900 hover:text-neutral-600 lg:hidden">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-5 h-5" aria-hidden="true">
									<path d="m12 19-7-7 7-7"></path>
									<path d="M19 12H5"></path>
								</svg>
							</button>

							<h1 class="text-neutral-900">esimple</h1>
						</div>
					</div>
				</header>

				<div class="max-w-2xl mx-auto px-4 py-4 lg:py-6">
					<div class="space-y-4 lg:space-y-6">
						<div class="bg-white rounded-lg p-4 lg:p-6">
							<h2 class="text-neutral-900 mb-3 lg:mb-4">Order Summary</h2>

							<div class="space-y-3 lg:space-y-4">
								<div class="flex gap-2 lg:gap-3">
									<div class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
											<span class="text-2xl lg:text-3xl">🇨🇳</span>
										</div>

										<div class="flex-1 min-w-0">
											<div class="flex justify-between items-start mb-1 gap-2">
												<h3 class="text-neutral-900 truncate">China</h3>
												<span class="text-neutral-900 whitespace-nowrap flex-shrink-0">PKR 242</span>
											</div>

											<p class="text-sm text-neutral-600 truncate">Valid for 7 days • 1 GB</p>
											<p class="text-xs text-neutral-500 mt-1">No of Sims: 1</p>
										</div>
									</div>
								</div>

								<div class="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-neutral-200">
									<div class="flex justify-between items-center">
										<span class="text-neutral-900">Total</span>
										<span class="text-neutral-900">PKR 242</span>
									</div>
								</div>
							</div>

							<div class="bg-white rounded-lg p-4 lg:p-8">
								<h1 class="text-neutral-900 mb-4 lg:mb-6">Customer Information</h1>

								<div class="space-y-4 lg:space-y-5"><div>

								<label data-slot="label" class="items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-neutral-900 mb-2 block" for="name">Name</label>
								<input type="text" data-slot="input" class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 lg:h-12 bg-white border-neutral-300" id="name" placeholder="Please enter your full name" value="" />
							</div>

							<div>
								<label data-slot="label" class="items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-neutral-900 mb-2 block" for="contact">Contact No</label>
								
								<div class="relative">
									<div class="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 lg:gap-2">
										<span class="text-base lg:text-lg">🇵🇰</span>
										<span class="text-neutral-600 text-sm lg:text-base">+92</span>
									</div>

									<input type="tel" data-slot="input" class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 lg:h-12 pl-20 lg:pl-24 bg-white border-neutral-300" id="contact" placeholder="" value="" />
								</div>
							</div>

							<div>
								<label data-slot="label" class="items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-neutral-900 mb-2 block" for="email">Email</label>
								<input type="email" data-slot="input" class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 lg:h-12 bg-white border-neutral-300" id="email" placeholder="Please enter your E-Mail ID" value="" />
							</div>

							<div>
								<label data-slot="label" class="items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-neutral-900 mb-3 block">How would you like to receive your eSim?</label>
								
								<div class="grid grid-cols-3 gap-3">
									<button type="button" class="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all border-emerald-500 bg-emerald-50">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-6 h-6 text-emerald-600" aria-hidden="true">
											<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
											<rect x="2" y="4" width="20" height="16" rx="2"></rect>
										</svg>

										<span class="text-sm text-emerald-700">E-Mail</span>
									</button>

									<button type="button" class="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all border-neutral-200 bg-white hover:border-neutral-300">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6 text-neutral-600" aria-hidden="true">
											<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
										</svg>

										<span class="text-sm text-neutral-900">WhatsApp</span>
									</button>

									<button type="button" class="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all border-neutral-200 bg-white hover:border-neutral-300">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-6 h-6 text-neutral-600" aria-hidden="true">
											<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
										</svg>

										<span class="text-sm text-neutral-900">SMS</span>
									</button>
								</div>
							</div>
						</div>

						<div class="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-neutral-200">
							<button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive py-2 has-[&gt;svg]:px-3 w-full h-11 lg:h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg">Continue to payment</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		</>
	)
}

export default CheckoutPage;