self.addEventListener("fetch", event => {
    const reqUrl = new URL(event.request.url);

    // Chỉ intercept file config.xml mà SWF load
    if (reqUrl.pathname.endsWith("config.xml")) {

        // Lấy query param từ URL của trang gốc (via clients.matchAll)
        event.respondWith((async () => {
            const clientsList = await self.clients.matchAll();
            const clientUrl = new URL(clientsList[0].url);

            const params = new URLSearchParams(clientUrl.search);
            const obj = Object.fromEntries(params.entries());

            const title = obj.title || 'Dear partners!';
            const description = obj.description || 'We wish you warm Christmas<br>and Happy New Year!<br>Be happy and keep smiling!';
            const url = obj.url || '';
            const urlTitle = obj.url_title || '';

            const xml = `
<config>
    <enable_music>true</enable_music>
    <music_path>music.mp3</music_path>
    <mute_button_visible>true</mute_button_visible>
    <text_block>
		<![CDATA[<font size="8" color="#B1FFF9"><br><br><br><br><font size="48" color="#B1FFF9">${title}<font size="22" color="#B1FFF9"><br>${description}<br><p align="right"><font size="18" color="#4FCCFA"><br><a href="${url}" target="_blank">${urlTitle}</a></font></p>]]>
	</text_block>
</config>
            `;

            return new Response(xml, {
                headers: { "Content-Type": "application/xml" }
            });
        })());

        return;
    }
});
