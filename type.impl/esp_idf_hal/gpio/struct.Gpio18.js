(function() {
    var type_impls = Object.fromEntries([["esp_idf_hal",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Gpio18\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#impl-Gpio18\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"esp_idf_hal/gpio/struct.Gpio18.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>Care should be taken not to instantiate this peripheral instance, if it is already instantiated and used elsewhere</p>\n</div></details></div></details>",0,"esp_idf_hal::usb_serial::UsbDMinGpio"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IOPin-for-Gpio18\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#impl-IOPin-for-Gpio18\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_hal/gpio/trait.IOPin.html\" title=\"trait esp_idf_hal::gpio::IOPin\">IOPin</a> for <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.downgrade\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#39-41\">Source</a><a href=\"#method.downgrade\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_hal/gpio/trait.IOPin.html#method.downgrade\" class=\"fn\">downgrade</a>(self) -&gt; <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.AnyIOPin.html\" title=\"struct esp_idf_hal::gpio::AnyIOPin\">AnyIOPin</a></h4></section></div></details>","IOPin","esp_idf_hal::usb_serial::UsbDMinGpio"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InputPin-for-Gpio18\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#impl-InputPin-for-Gpio18\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_hal/gpio/trait.InputPin.html\" title=\"trait esp_idf_hal::gpio::InputPin\">InputPin</a> for <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.downgrade_input\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#23-25\">Source</a><a href=\"#method.downgrade_input\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_hal/gpio/trait.InputPin.html#method.downgrade_input\" class=\"fn\">downgrade_input</a>(self) -&gt; <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.AnyInputPin.html\" title=\"struct esp_idf_hal::gpio::AnyInputPin\">AnyInputPin</a></h4></section></div></details>","InputPin","esp_idf_hal::usb_serial::UsbDMinGpio"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OutputPin-for-Gpio18\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#impl-OutputPin-for-Gpio18\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_hal::gpio::OutputPin\">OutputPin</a> for <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.downgrade_output\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#31-33\">Source</a><a href=\"#method.downgrade_output\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_hal/gpio/trait.OutputPin.html#method.downgrade_output\" class=\"fn\">downgrade_output</a>(self) -&gt; <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.AnyOutputPin.html\" title=\"struct esp_idf_hal::gpio::AnyOutputPin\">AnyOutputPin</a></h4></section></div></details>","OutputPin","esp_idf_hal::usb_serial::UsbDMinGpio"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Peripheral-for-Gpio18\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#impl-Peripheral-for-Gpio18\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_hal/peripheral/trait.Peripheral.html\" title=\"trait esp_idf_hal::peripheral::Peripheral\">Peripheral</a> for <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.P\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#associatedtype.P\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"esp_idf_hal/peripheral/trait.Peripheral.html#associatedtype.P\" class=\"associatedtype\">P</a> = <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h4></section></summary><div class='docblock'>Peripheral singleton type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_unchecked\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#method.clone_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"esp_idf_hal/peripheral/trait.Peripheral.html#tymethod.clone_unchecked\" class=\"fn\">clone_unchecked</a>(&amp;mut self) -&gt; Self::<a class=\"associatedtype\" href=\"esp_idf_hal/peripheral/trait.Peripheral.html#associatedtype.P\" title=\"type esp_idf_hal::peripheral::Peripheral::P\">P</a></h4></section></summary><div class='docblock'>Unsafely clone (duplicate) a peripheral singleton. <a href=\"esp_idf_hal/peripheral/trait.Peripheral.html#tymethod.clone_unchecked\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/peripheral.rs.html#155-160\">Source</a><a href=\"#method.into_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_hal/peripheral/trait.Peripheral.html#method.into_ref\" class=\"fn\">into_ref</a>&lt;'a&gt;(self) -&gt; <a class=\"struct\" href=\"esp_idf_hal/peripheral/struct.PeripheralRef.html\" title=\"struct esp_idf_hal::peripheral::PeripheralRef\">PeripheralRef</a>&lt;'a, Self::<a class=\"associatedtype\" href=\"esp_idf_hal/peripheral/trait.Peripheral.html#associatedtype.P\" title=\"type esp_idf_hal::peripheral::Peripheral::P\">P</a>&gt;<div class=\"where\">where\n    Self: 'a,</div></h4></section></summary><div class='docblock'>Convert a value into a <code>PeripheralRef</code>. <a href=\"esp_idf_hal/peripheral/trait.Peripheral.html#method.into_ref\">Read more</a></div></details></div></details>","Peripheral","esp_idf_hal::usb_serial::UsbDMinGpio"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pin-for-Gpio18\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#impl-Pin-for-Gpio18\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_hal/gpio/trait.Pin.html\" title=\"trait esp_idf_hal::gpio::Pin\">Pin</a> for <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.pin\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#method.pin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_hal/gpio/trait.Pin.html#tymethod.pin\" class=\"fn\">pin</a>(&amp;self) -&gt; i32</h4></section></div></details>","Pin","esp_idf_hal::usb_serial::UsbDMinGpio"],["<section id=\"impl-Send-for-Gpio18\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/gpio.rs.html#2001\">Source</a><a href=\"#impl-Send-for-Gpio18\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Send for <a class=\"struct\" href=\"esp_idf_hal/gpio/struct.Gpio18.html\" title=\"struct esp_idf_hal::gpio::Gpio18\">Gpio18</a></h3></section>","Send","esp_idf_hal::usb_serial::UsbDMinGpio"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[8922]}