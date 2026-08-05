document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("a").forEach(link => {

        if (
            link.target === "_blank" ||
            link.hasAttribute("download") ||
            link.href.startsWith("mailto:") ||
            link.href.startsWith("tel:")
        ) return;

        link.addEventListener("click", function (e) {

            const url = this.href;

            if (url === window.location.href) return;

            e.preventDefault();

            document.body.classList.add("page-leave");

            setTimeout(() => {
                window.location.href = url;
            }, 700);
        });

    });

});
