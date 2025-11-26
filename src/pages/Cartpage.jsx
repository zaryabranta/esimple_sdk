import React from 'react';

function CartPage(){
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
					</div>
				</header>

				<div class="max-w-2xl mx-auto px-4 py-6 space-y-6">
					<div class="bg-white rounded-lg border border-neutral-200 p-6">
						<h2 class="text-neutral-900 mb-6">Order Details</h2>

						<div class="space-y-4">
							<div class="grid grid-cols-12 gap-2 pb-2 border-b border-neutral-200 text-xs text-neutral-500 uppercase">
								<div class="col-span-3">Destination</div>
								<div class="col-span-2">Data</div>
								<div class="col-span-2">Validity</div>
								<div class="col-span-2">Price</div>
								<div class="col-span-2">Qty</div>
								<div class="col-span-1"></div>
							</div>

							<div class="grid grid-cols-12 gap-2 items-center py-3">
								<div class="col-span-3 text-neutral-900">China</div>
								<div class="col-span-2 text-neutral-900">2 GB</div>
								<div class="col-span-2 text-neutral-900">Valid for 7 days</div>
								<div class="col-span-2 text-neutral-900">PKR 364</div>
								<div class="col-span-2">
									<button type="button" role="combobox" aria-controls="radix-:r4:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" class="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-9 w-16">
										<span data-slot="select-value" style={{pointerEvents: 'none'}}>1</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
											<path d="m6 9 6 6 6-6"></path>
										</svg>
									</button>
								</div>
								<div class="col-span-1 flex justify-end">
									<button class="text-red-500 hover:text-red-700">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2 w-4 h-4" aria-hidden="true">
											<path d="M10 11v6"></path>
											<path d="M14 11v6"></path>
											<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
											<path d="M3 6h18"></path>
											<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
										</svg>
									</button>
								</div>
							</div>
						</div>

						<button class="flex items-center gap-2 text-blue-600 hover:text-blue-700 mt-4 text-sm">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket w-4 h-4" aria-hidden="true">
								<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
								<path d="M13 5v2"></path>
								<path d="M13 17v2"></path>
								<path d="M13 11v2"></path>
							</svg>

							<span>Apply a Coupon Code</span>
						</button>
					</div>

					<div class="bg-white rounded-lg border border-neutral-200 p-6">
						<h2 class="text-neutral-900 mb-2">Order Summary</h2>
						<p class="text-neutral-600 text-sm mb-6">You can review your order summary.</p>

						<div class="space-y-4">
							<div class="flex justify-between items-center pb-4 border-b border-neutral-200">
								<span class="text-neutral-600">Amount</span>
								<span class="text-neutral-900">PKR 364</span>
							</div>

							<div class="flex justify-between items-center pt-2">
								<span class="text-neutral-900">Total Price</span>
								<span class="text-neutral-900">PKR 364</span>
							</div>
						</div>

						<div class="space-y-4 mt-6">
							<div class="flex items-start gap-3">
								<button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" data-slot="checkbox" class="peer bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50" id="terms"></button>
								<label for="terms" class="text-sm text-neutral-700 leading-tight cursor-pointer">I agree to <a href="#" class="text-blue-600 hover:underline">Terms &amp; Conditions</a> and <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.</label>
							</div>

							<div class="flex items-start gap-3">
								<button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" data-slot="checkbox" class="peer bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50" id="device"></button>
								<label for="device" class="text-sm text-neutral-700 leading-tight cursor-pointer">I acknowledge that I have an eSIM compatible and unlocked device. <a href="#" class="text-blue-600 hover:underline">Learn More</a></label>
							</div>
						</div>

						<button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-4 py-2 has-[&gt;svg]:px-3 w-full mt-6 h-12 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg disabled:bg-neutral-300 disabled:text-neutral-500" disabled="">Check Out</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartPage;