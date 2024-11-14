$(document).ready(function () {
	const questions = [
		{
			question:
				'What is the correct way to declare an array of 5 integers in C?',
			answers: [
				'int arr = [5];',
				'int arr[5];',
				'int arr = {0, 0, 0, 0, 0};',
				'int arr[] = {0, 0, 0, 0, 0};',
			],
			correctAnswer: 1,
			difficulty: 'easy',
		},
		{
			question: 'Apa itu array?',
			answers: ['Struktur data', 'Looping', 'Variable', 'Fungsi'],
			correctAnswer: 0,
			difficulty: 'easy',
		},
		{
			question: 'Indeks pertama pada array adalah?',
			answers: ['1', '0', '-1', '2'],
			correctAnswer: 1,
			difficulty: 'easy',
		},
		{
			question: 'Apa manfaat utama penggunaan array?',
			answers: [
				'Menyimpan data bertipe sama',
				'Menyimpan berbagai tipe data',
				'Membuat program lebih cepat',
				'Menambah memori',
			],
			correctAnswer: 0,
			difficulty: 'easy',
		},
		{
			question:
				'Bagaimana cara menampilkan semua elemen array dalam urutan terbalik?',
			answers: [
				'Loop dari belakang',
				'Menggunakan fungsi reverse',
				'Loop biasa',
				'Tidak bisa dilakukan',
			],
			correctAnswer: 0,
			difficulty: 'medium',
		},
		{
			question: 'Bagaimana cara mengakses elemen ketiga pada array?',
			answers: ['array[3]', 'array[2]', 'array.get(3)', 'get(array, 3)'],
			correctAnswer: 1,
			difficulty: 'medium',
		},
		{
			question:
				'Apa yang terjadi jika kita mencoba mengakses indeks di luar ukuran array?',
			answers: [
				'Nilai default',
				'Error',
				'Mencetak 0',
				'Tidak terjadi apa-apa',
			],
			correctAnswer: 1,
			difficulty: 'medium',
		},
		{
			question: 'Bagaimana cara menghitung jumlah semua elemen dalam array?',
			answers: [
				'Loop menambah semua elemen',
				'Menggunakan fungsi sum()',
				'Loop mengurangi semua elemen',
				'Tidak bisa dihitung',
			],
			correctAnswer: 0,
			difficulty: 'medium',
		},
		{
			question:
				'Bagaimana cara mencari nilai terbesar dalam array tanpa fungsi?',
			answers: [
				'Loop dengan kondisi',
				'Sort lalu ambil elemen pertama',
				'Gunakan fungsi max',
				'Gunakan variabel sementara',
			],
			correctAnswer: 0,
			difficulty: 'hard',
		},
		{
			question: 'Jika int arr[5] = {1,2,3,4,5}, apa hasil arr[5]?',
			answers: ['Error', '5', 'Tidak terjadi apa-apa', '0'],
			correctAnswer: 0,
			difficulty: 'hard',
		},
	];

	let currentQuestion = 0;
	let score = 0;

	function loadQuestion() {
		const questionData = questions[currentQuestion];
		$('#question').text(questionData.question);
		$('#options').empty();
		questionData.answers.forEach((answer, index) => {
			$('#options').append(`<button class="option">${answer}</button>`);
		});
		$('.option').on('click', function () {
			if (
				questions[currentQuestion].answers.indexOf($(this).text()) ===
				questions[currentQuestion].correctAnswer
			) {
				score += 10;
			}
			currentQuestion++;
			if (currentQuestion < questions.length) {
				loadQuestion();
			} else {
				showScore();
			}
		});
	}

	function showScore() {
		$('#question-container').hide();
		$('#next-btn').hide();
		$('#score-container').html(`<h2>Your Score: ${score}</h2>`);
	}

	loadQuestion();
});

/* Initialize Particles */
particlesJS('particles-js', {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: { value: '#ffffff' },
		shape: {
			type: 'circle',
			stroke: { width: 0, color: '#000000' },
			polygon: { nb_sides: 5 },
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 2,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 },
		},
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: { enable: true, mode: 'grab' },
			onclick: { enable: true, mode: 'push' },
			resize: true,
		},
		modes: {
			grab: { distance: 200, line_linked: { opacity: 0.5 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 },
		},
	},
	retina_detect: true,
});
