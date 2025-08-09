[HttpPost]
[ValidateAntiForgeryToken]
public async Task<IActionResult> Create([Bind("Id,FullName,Email,PhoneNumber,DateOfBirth,Gender")] Patient patient)
{
    // نتأكد أولاً أن البيانات المُرسلة سليمة
    if (ModelState.IsValid)
    {
        try
        {
            // جرب إضافة المريض وحفظ التغييرات في قاعدة البيانات
            _context.Add(patient);
            await _context.SaveChangesAsync();

            // إذا نجح الحفظ، جهّز رسالة نجاح
            TempData["SuccessMessage"] = "تمت إضافة المريض بنجاح!";
            return RedirectToAction(nameof(Index)); // ثم اذهب لصفحة عرض المرضى
        }
        catch (Exception)
        {
            // إذا حدث خطأ أثناء الحفظ، جهّز رسالة خطأ
            TempData["ErrorMessage"] = "حدث خطأ غير متوقع أثناء إضافة المريض.";
        }
    }

    // إذا كانت البيانات غير سليمة من البداية، ابق في نفس الصفحة لعرض الأخطاء
    return View(patient);
}
