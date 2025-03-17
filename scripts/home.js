function redirectWithDelay(url, delay_in_ms) {
    setTimeout(() => {
        window.location.href = url;
    }, delay_in_ms);
}

// Add news content dynamically with categories - Expanded data
function populateNews() {
    const newsContainer = document.querySelector('.news-grid-container');
    if (!newsContainer) return;

    // Clear existing content
    newsContainer.innerHTML = '';

    const newsItems = [
        {
            title: 'Thông báo lịch nghỉ lễ',
            content: 'Trường sẽ nghỉ lễ từ ngày 30/4 đến 3/5. Các hoạt động học tập sẽ được tiếp tục vào ngày 4/5.',
            date: '22/04/2023',
            category: 'academic'
        },
        {
            title: 'Hội thảo khoa học',
            content: 'Hội thảo khoa học sẽ diễn ra vào ngày 15/5/2023 tại Hội trường A với sự tham gia của các chuyên gia hàng đầu.',
            date: '20/04/2023',
            category: 'event'
        },
        {
            title: 'Lịch thi cuối kỳ',
            content: 'Lịch thi cuối kỳ đã được cập nhật. Vui lòng kiểm tra email và cổng thông tin sinh viên.',
            date: '18/04/2023',
            category: 'academic'
        },
        {
            title: 'Câu lạc bộ lập trình mới',
            content: 'Câu lạc bộ lập trình Python sẽ khai trương vào thứ 7 tuần này. Đăng ký tham gia tại văn phòng khoa.',
            date: '15/04/2023',
            category: 'event'
        },
        {
            title: 'Học bổng du học 2023',
            content: 'Thông tin về các học bổng du học năm 2023 đã được cập nhật. Hạn chót nộp hồ sơ là 30/5/2023.',
            date: '12/04/2023',
            category: 'academic'
        },
        // New news items
        {
            title: 'Tuyển dụng sinh viên thực tập',
            content: 'Công ty ABC đang tìm kiếm sinh viên năm cuối ngành CNTT cho vị trí thực tập. Ứng viên quan tâm vui lòng gửi CV trước ngày 10/5.',
            date: '10/04/2023',
            category: 'event'
        },
        {
            title: 'Khai trương phòng nghiên cứu mới',
            content: 'Phòng nghiên cứu AI và Robotics đã chính thức được khai trương tại tầng 5, tòa nhà B. Sinh viên có thể đăng ký sử dụng từ tuần sau.',
            date: '08/04/2023',
            category: 'academic'
        },
        {
            title: 'Cuộc thi khởi nghiệp sinh viên',
            content: 'Cuộc thi "Ý tưởng khởi nghiệp sáng tạo" sẽ diễn ra vào tháng 6/2023. Giải thưởng lên đến 50 triệu đồng cho đội chiến thắng.',
            date: '05/04/2023',
            category: 'event'
        },
        {
            title: 'Thông báo đổi phòng học môn Triết học',
            content: 'Từ tuần sau, môn Triết học sẽ được chuyển từ phòng C203 sang phòng D101 do nhu cầu sửa chữa cơ sở vật chất.',
            date: '03/04/2023',
            category: 'academic'
        },
        {
            title: 'Buổi giao lưu với doanh nghiệp',
            content: 'Sinh viên có cơ hội gặp gỡ và giao lưu với đại diện từ Google, Microsoft và Apple vào thứ 6 tuần tới tại Hội trường lớn.',
            date: '01/04/2023',
            category: 'event'
        },
        {
            title: 'Chương trình trao đổi sinh viên',
            content: 'Chương trình trao đổi sinh viên với Đại học Tokyo mở đơn đăng ký cho kỳ mùa thu. Hạn chót nộp hồ sơ là 30/6/2023.',
            date: '29/03/2023',
            category: 'academic'
        },
        {
            title: 'Workshop kỹ năng mềm',
            content: 'Workshop về kỹ năng giao tiếp và làm việc nhóm sẽ được tổ chức miễn phí cho tất cả sinh viên vào ngày 10/5/2023.',
            date: '25/03/2023',
            category: 'event'
        }
    ];

    // Add news items to container with improved markup
    newsItems.forEach((item) => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.dataset.category = item.category;

        newsItem.innerHTML = `
            <div class="news-item-header">
                <span class="news-category">${item.category === 'event' ? 'Sự kiện' : 'Học vụ'}</span>
                <h3 title="${item.title}">${item.title}</h3>
            </div>
            <div class="news-item-content">
                <p title="${item.content}">${item.content}</p>
            </div>
            <div class="news-date">${item.date}</div>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Dynamically generate the schedule for each day
function populateSchedule() {
    // Schedule data organized by day
    const scheduleData = {
        monday: [
            {
                time: '07:30 - 10:40',
                subject: 'Nhập môn IoT',
                room: 'B302_LAB_CT',
                teacher: 'Nguyễn Minh Sơn',
                type: 'iot',
                checked: false
            },
            {
                time: '12:50 - 16:45',
                subject: 'Lập trình hướng đối tượng {Python}',
                room: 'B501_LAB_AI',
                teacher: 'Phan Thị Hương',
                type: 'programming',
                checked: false
            }
        ],
        tuesday: [],
        wednesday: [
            {
                time: '07:30 - 10:40',
                subject: 'Tin học đại cương {Word, Excel, PowerPoint, Intern}',
                room: 'Online',
                teacher: 'Phan Thị Hương',
                type: 'informatics',
                checked: false
            },
            {
                time: '12:50 - 16:00',
                subject: 'Xác suất thống kê {CNTT từ khóa 2021}',
                room: 'G301',
                teacher: 'Đinh Thái Sơn',
                type: 'statistics',
                checked: false
            }
        ],
        thursday: [
            {
                time: '07:30 - 09:00',
                subject: 'Thiết kế UI/UX',
                room: 'C203_PM02',
                teacher: 'Bùi Xuân Cảnh',
                type: 'design',
                checked: false
            },
            {
                time: '09:05 - 10:35',
                subject: 'Thiết kế UI/UX (Thực hành)',
                room: 'C203_PM02',
                teacher: 'Bùi Xuân Cảnh',
                type: 'design',
                checked: false
            },
            {
                time: '10:40 - 11:25',
                subject: 'Sinh hoạt lớp',
                room: 'C203_PM02',
                teacher: 'Bùi Xuân Cảnh',
                type: 'class activity',
                checked: false
            },
            {
                time: '12:50 - 16:00',
                subject: 'Tin học đại cương {Word, Excel, PowerPoint, Intern}',
                room: 'C502_PM09',
                teacher: 'Phan Thị Hương',
                type: 'informatics',
                checked: false
            }
        ],
        friday: [
            {
                time: '12:50 - 14:20',
                subject: 'Cơ sở dữ liệu {khóa 2022}',
                room: 'B501_LAB_AI',
                teacher: 'Phan Thiện Phước',
                type: 'database',
                checked: false
            },
            {
                time: '14:25 - 15:55',
                subject: 'Cơ sở dữ liệu {khóa 2022}',
                room: 'B501_LAB_AI',
                teacher: 'Phan Thiện Phước',
                type: 'database',
                checked: false
            }
        ],
        saturday: [],
        sunday: [
            {
                time: '07:30 - 10:40',
                subject: 'English 2',
                room: 'Online',
                teacher: 'Nguyễn Ngọc Lưu Ly',
                type: 'english',
                checked: false
            }
        ]
    };


    // Get all schedule containers
    const scheduleContainers = {
        monday: document.getElementById('monday'),
        tuesday: document.getElementById('tuesday'),
        wednesday: document.getElementById('wednesday'),
        thursday: document.getElementById('thursday'),
        friday: document.getElementById('friday'),
        saturday: document.getElementById('saturday'),
        sunday: document.getElementById('sunday')
    };

    // Clear existing content in all day containers
    Object.values(scheduleContainers).forEach(container => {
        if (container) container.innerHTML = '';
    });

    // Generate HTML for each day
    Object.entries(scheduleData).forEach(([day, classes], dayIndex) => {
        const container = scheduleContainers[day];
        if (!container) return;

        // If it's Sunday or no classes, show weekend message
        if (classes.length === 0) {
            container.innerHTML = `
                <div class="weekend-message">
                    <div class="weekend-icon">🌞</div>
                    <h3>Không có lịch học</h3>
                    <p>Hãy tận hưởng ngày nghỉ của bạn!</p>

                    <div class="suggestion-box">
                        <h4>Gợi ý hoạt động</h4>
                        <ul>
                            <li>Ôn bài và làm bài tập</li>
                            <li>Tham gia câu lạc bộ sinh viên</li>
                            <li>Thư giãn và chuẩn bị cho tuần mới</li>
                        </ul>
                    </div>
                </div>
            `;
            return;
        }

        // Generate HTML for each class
        classes.forEach((classItem, classIndex) => {
            const uniqueId = `schedule-checkbox-${dayIndex}-${classIndex}`;
            const classHtml = document.createElement('div');
            classHtml.className = `class-item ${classItem.type}`;
            classHtml.innerHTML = `
                <div class="class-time">${classItem.time}</div>
                <div class="class-details">
                    <h3>${classItem.subject}</h3>
                    <p>Phòng: ${classItem.room}</p>
                    <p>GV: ${classItem.teacher}</p>
                </div>
                <div class="class-actions">
                    <label class="reminder">
                        <input type="checkbox" ${classItem.checked ? 'checked' : ''} data-id="${uniqueId}">
                        <span class="checkmark"></span>
                    </label>
                </div>
            `;
            container.appendChild(classHtml);
        });
    });
}

// Filter news by category - Updated for scrolling design
function initNewsFilters() {
    const filterBtns = document.querySelectorAll('.news-tab');
    const newsItems = document.querySelectorAll('.news-item');

    // Function to apply filtering with animation
    const applyFilterDisplay = (filter) => {
        newsItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'flex';
                // Reset animation to create a nice fade-in effect when filtering
                item.style.animation = 'none';
                // Trigger reflow
                void item.offsetWidth;
                item.style.animation = 'fadeInUp 0.5s ease-out forwards';
            } else {
                item.style.display = 'none';
            }
        });

        // Scroll back to top after filtering
        const newsContainer = document.querySelector('.news-grid-container');
        if (newsContainer) {
            newsContainer.scrollTop = 0;
        }
    };

    // Set initial filter state (Tất cả)
    applyFilterDisplay('all');

    // Add click handlers
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Apply filtering
            const filter = btn.dataset.filter;
            applyFilterDisplay(filter);
        });
    });
}

// Handle day switching in schedule
function initScheduleDays() {
    const dayButtons = document.querySelectorAll('.day-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');

    dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and schedules
            dayButtons.forEach(btn => btn.classList.remove('active'));
            daySchedules.forEach(schedule => schedule.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding schedule
            const dayId = button.getAttribute('data-day');
            document.getElementById(dayId).classList.add('active');
        });
    });
}

// Initialize schedule checkboxes to save state
function initScheduleCheckboxes() {
    const checkboxes = document.querySelectorAll('.reminder input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const id = checkbox.dataset.id;
        if (!id) return;

        // Set initial state from localStorage if it exists
        const savedState = localStorage.getItem(id);
        if (savedState !== null) {
            checkbox.checked = savedState === 'true';
        }

        // Add event listener to save state
        checkbox.addEventListener('change', function () {
            localStorage.setItem(id, this.checked);
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    populateSchedule(); // Populate schedule first
    populateNews();     // Then populate news
    initScheduleDays();
    initScheduleCheckboxes();
    initNewsFilters();
});
