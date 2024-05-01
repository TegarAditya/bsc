<script lang="ts">
	import { BottomNav, BottomNavItem, Tooltip, DarkMode, Progressbar } from 'flowbite-svelte';
	import { BookmarkSolid, AngleLeftOutline, AngleRightOutline } from 'flowbite-svelte-icons';
	import { currentPage } from '$lib/stores/currentPage';
	import { examStarted } from '$lib/stores/examStarted';
	import '../app.pcss';

	let current: number = 1;
	let total: number = 40;
	let startTime: string = '2024-05-01 07:00:00';
	let remainingTime: string = calculateRemainingTime(startTime, 3);

	function calculateRemainingTime(startTime: string, duration: number): string {
		const start = new Date(startTime);
		const end = new Date(start.getTime() + duration * 60 * 60 * 1000);

		const diff = end.getTime() - Date.now();
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);

		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function countdown() {
		const interval = setInterval(() => {
			const timeArray = remainingTime.split(':');
			let hours = parseInt(timeArray[0]);
			let minutes = parseInt(timeArray[1]);
			let seconds = parseInt(timeArray[2]);

			if (seconds > 0) {
				seconds--;
			} else {
				if (minutes > 0) {
					minutes--;
					seconds = 59;
				} else {
					if (hours > 0) {
						hours--;
						minutes = 59;
						seconds = 59;
					} else {
						clearInterval(interval);
					}
				}
			}

			remainingTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
		}, 1000);
	}

	$: if ($examStarted) {
		countdown();
	}

	$: currentPage.set(current);
</script>

<div class="h-sceen absolute -z-10 w-screen dark:bg-slate-500">oke</div>

<div
	class="fixed z-10 flex h-14 w-full grid-cols-3 justify-center bg-white align-middle shadow-md dark:bg-slate-800"
>
	<p id="remaining-time" class="my-auto text-lg font-bold dark:text-white">{remainingTime}</p>
</div>

<div class="flex justify-center align-middle">
	<slot />
</div>

<BottomNav
	position="fixed"
	navType="pagination"
	classInner="grid-cols-4"
	classOuter="dark:bg-slate-800"
>
	<BottomNavItem btnName="Bookmark">
		<BookmarkSolid
			class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
		<Tooltip arrow={false}>Bookmark</Tooltip>
	</BottomNavItem>
	<div class="col-span-2 flex items-center justify-center">
		<div
			class="mx-2 flex w-full max-w-[180px] items-center justify-between rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-200"
		>
			<button
				type="button"
				on:click={() => {
					current > 1 ? (current -= 1) : current;
				}}
				class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
			>
				<AngleLeftOutline class="ms-1 h-2 w-2" />
				<span class="sr-only">Previous page</span>
			</button>
			<span class="mx-1 flex-shrink-0 text-sm font-medium">{current} of {total}</span>
			<button
				type="button"
				on:click={() => {
					current < total ? (current += 1) : current;
				}}
				class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
			>
				<AngleRightOutline class="me-1 h-2 w-2" />
				<span class="sr-only">Next page</span>
			</button>
		</div>
	</div>
	<BottomNavItem btnName="Settings">
		<DarkMode
			btnClass="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
		<Tooltip arrow={false}>Mode</Tooltip>
	</BottomNavItem>
</BottomNav>
