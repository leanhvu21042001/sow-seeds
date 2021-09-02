# Phân tích đối tượng trong game

## Phân tích giao diện

### Vào game

- Đăng ký người chơi:
    - Form có 2 input text nhập tên nhập tuổi và button submit 


### Giao diện sau khi đăng ký người chơi

- Menu Chính
    -  Có các button chứ năng: Chơi, Thoát
    - Các phần có thể thêm:  Top điểm, Chỉnh info người chơi, info game...


### Bắt đầu chơi

- Hạt giống để người chơi mua
    - ảnh, số tiền, trạng thái (được chọn hay không được chọn)

- Câu từ hạt giống lớn lên
    - Ảnh, tên, giá tiền mua, giá trị khi được thu hoạch, thời gian trồng, thời gian thu hoạch, mức sống (sẽ bị con trùng đánh cắn cho tới chết dựa theo sức mạnh con trùng, bón phân sẽ được hồi phục, bắt sâu đi thì sau khoản thời gian thì hồi phục)

- Thiết bị trồng vườn
    - Tên, Khả năng của thiết bị, tiền trả khi dùng (có hoặc không) level bỏ tiền ra mua (nếu trên 3 thì free, nếu dưới 3 thì vần hiển thị tiền mua), đối tượng tác động, loại đối tượng tác động

- đối tượng nguy hiểm cho cây
    - tên, sức mạnh (sẽ làm mất mức sống của cây, theo thời gian), mức sống của con trùng (con trùng chỉ chết khi mức sống bằng 0 và bị các thiết bị tròng vườn gây ảnh hưởng)

- Người chơi:
    - Avatar, Tổng tiền (về 0 thì bắt gameover, cho phép chơi lại và reset như mới lần đầu chơi)

- Button Seeds:
    - Thay đổi lại hoạt giống trên menu chọ hạt giống

- Button menu:
    - Ấn button menu sẽ dừng chơi và không tính điểm, được lưu lại dữ liệu, tại giao diện menu, thay vì "bắt đầu chơi" thì sẽ hiện "tiếp tục chơi".
- Score:
    - Điểm người chơi thu được tại board game hiện tại
- Luốn đất:
    - Chia theo chiều dọc hoặc ngang, mỗi luốn sẽ có số lượng Ô để TRỒNG CÂY
### Ý tưởng đề cho

- 👉 Trồng hoa và cây ăn trái.
- 👉 Có khoản 3 đến 5 cây trồng (Thời gian thu, Tiền mua, và giá bán)
- 👉 Người chơi có tiền và luốn đất nhất định.
- 👉 Người chơi chọn cây, và click và ô trên luốn đất sẽ được thêm vào luốn đất
- 👉 Cây PHẢI có 3 trạng thái: hạt -> cây xanh -> cây có hoa hoặc có trái
- 👉 Đúng thời gian thu mới có tiền, còn không thì không cho thu, hoặc bị xúc bỏ.
- 👉 Thời gian thu do nhóm quy định. mỗi ô cây chỉ thu đúng 3 lần và cây sẽ biến mất (thêm animation cây héo và mất cũng là quá tuyệt)
- 👉 Game kết thúc khi người chơi hết tiền và không có cây nào để thu hoạch.