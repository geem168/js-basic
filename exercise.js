function calculate_parking_fee(vehicle_type, duration) {
    // Harga berdasarkan tipe kendaraan
    const prices = {
        car: { first_hour: 5000, next_hour: 3000, extra_charge: 50000 },
        bike: { first_hour: 2000, next_hour: 1000, extra_charge: 20000 }
    };

    // Jika durasi kurang dari 1 jam, set menjadi 1 jam
    if (duration < 1) {
        duration = 1;
    }

    // Ambil harga berdasarkan kendaraan
    const { first_hour, next_hour, extra_charge } = prices[vehicle_type];

    // Hitung total: jam pertama + jam berikutnya
    let total_price = first_hour + (duration - 1) * next_hour;

    // Jika durasi lebih dari 24 jam, tambahkan biaya ekstra
    const one_day = 24;
    if (duration > one_day) {
        total_price += extra_charge;
    }

    return total_price;
}

// Contoh penggunaan:
console.log(calculate_parking_fee("car", 3));  // Output: 11000
console.log(calculate_parking_fee("bike", 1));  // Output: 2000
console.log(calculate_parking_fee("car", 27));  // Output: 133000
