<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import logo from '$lib/assets/logo-sm.png';
    import { examStarted } from '$lib/stores/examStarted';

    function startExam() {
        examStarted.set(true);
    }
</script>

<div class="my-auto py-28">
	<div class="space-y-4">
        <div class="flex justify-center w-full">
            <img src={logo} alt="" class="w-40 mb-5">
        </div>
		<Card img="">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Peraturan Ujian
			</h5>
            <hr class="pb-2">
            <div class="">
                <ol class="my-2 text-sm list-decimal list-outside ml-5  dark:text-gray-300">
                    <li class="mb-1"><span class="font-bold dark:text-primary-50">Nilai simulasi tidak mempengaruhi </span> hasil akhir penilaian,</li>
                    <li class="mb-1"><span class="font-bold dark:text-primary-50">Peserta diberi waktu 3 jam </span>dimulai saat klik tombol Mulai Ujian,</li>
                    <li class="mb-1"><span class="font-bold dark:text-primary-50">Dilarang keluar dari aplikasi</span> selama melaksanakan ujian,</li>
                    <li class="mb-1"><span class="font-bold dark:text-primary-50">Dilarang menggunakan segala jenis alat bantu</span> seperti kalkulator, materi online, maupun AI,</li>
                    <li class="mb-1"><span class="font-bold dark:text-primary-50">Segala bentuk kecurangan</span> dapat mempengaruhi hasil akhir peserta.</li>
                    <li class="mb-1"><span class="font-bold dark:text-primary-50">Peserta dapat mengerjakan ujian hanya sekali</span> dan tidak dapat diulangi.</li>
                </ol>
            </div>
			<Button class="mt-2" href="/exam" on:click={startExam}>
				Mulai Ujian <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
			</Button>
		</Card>
	</div>
</div>
