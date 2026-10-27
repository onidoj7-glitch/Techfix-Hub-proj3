const GUIDES_DATA = [
  {
    id: "laptop-overheating", title: "Laptop overheating", category: "Hardware", difficulty: "Beginner",
    summary: "Reduce excess heat and help your laptop run reliably by checking airflow, workload, and its surroundings.",
    symptoms: ["The fan runs loudly or constantly.", "The laptop feels unusually hot or shuts down unexpectedly.", "Performance slows during demanding tasks."],
    causes: ["Blocked air vents or a soft surface restricting airflow.", "Heavy applications creating sustained processor load.", "Dust buildup or aging internal cooling components."],
    steps: ["Save your work and place the laptop on a firm, flat surface.", "Check that the air vents are uncovered and move the device away from heat sources.", "Close apps or browser tabs you are not using and check whether fan activity decreases.", "Shut the laptop down and allow it to cool before cleaning the exterior vents with a soft, dry cloth.", "Restart and monitor temperatures and fan behavior during normal use.", "If overheating continues, arrange inspection by a qualified technician."],
    warnings: ["Do not use liquids or insert objects into vents.", "Do not open the laptop unless you are trained and the manufacturer permits it.", "Back up important files if the device repeatedly shuts down."]
  },
  {
    id: "computer-wont-turn-on", title: "Computer won't turn on", category: "Hardware", difficulty: "Beginner",
    summary: "Work through basic power checks when a desktop or laptop does not respond to the power button.",
    symptoms: ["No lights, fan activity, or display after pressing power.", "A charging indicator does not appear.", "The device starts briefly and switches off."],
    causes: ["A disconnected power cable or drained battery.", "A faulty outlet, adapter, or power strip.", "A hardware or power supply fault."],
    steps: ["Check that the power cable is fully connected at the device and wall outlet.", "Test the wall outlet with a different known-working device and bypass the power strip if safe.", "For a laptop, connect its original charger and allow it to charge for 15 minutes.", "Disconnect nonessential accessories, then try powering on once more.", "If the device has a removable battery and the manufacturer documents a reset procedure, follow that procedure.", "If there is still no response, contact a qualified repair technician."],
    warnings: ["Never open a power supply or power adapter.", "Stop immediately if you notice smoke, sparks, a burning smell, or a damaged cable."]
  },
  {
    id: "keyboard-not-responding", title: "Keyboard keys not responding", category: "Hardware", difficulty: "Beginner",
    summary: "Check connection, settings, and debris when some or all keyboard keys stop responding.",
    symptoms: ["Some keys do not register or repeat unexpectedly.", "A USB keyboard disconnects intermittently.", "The built-in keyboard fails while other input devices work."],
    causes: ["A loose connection, low wireless battery, or pairing issue.", "A system setting or application intercepting input.", "Debris, liquid damage, or a failing keyboard."],
    steps: ["Save your work and test typing in another application.", "For a wired keyboard, reconnect it to another available USB port.", "For a wireless keyboard, check its battery and reconnect it using the manufacturer's instructions.", "Restart the computer and check accessibility and keyboard settings.", "If only one app is affected, update or troubleshoot that app.", "If keys remain unresponsive or liquid was spilled, stop using the keyboard and seek service."],
    warnings: ["Do not pour cleaning fluid onto a keyboard.", "If liquid has entered a laptop keyboard, power down and unplug it if safe; do not continue testing it."]
  },
  {
    id: "application-crashes", title: "An application keeps crashing", category: "Software", difficulty: "Beginner",
    summary: "Use safe update, restart, and compatibility checks to diagnose a frequently crashing application.",
    symptoms: ["The app closes without warning.", "An error appears during launch or while using a feature.", "The app freezes and stops responding."],
    causes: ["An outdated app or operating system.", "Corrupted temporary data or conflicting add-ons.", "Insufficient memory or a compatibility issue."],
    steps: ["Note any error message and when the crash occurs.", "Restart the app and device, then check whether the issue repeats.", "Install available updates for the app and operating system from their official update tools.", "If the app offers a documented cache-clearing or repair option, use it without deleting personal files.", "Temporarily disable recently added extensions or add-ons and retest.", "Back up app data and reinstall only if the problem persists and you know your sign-in or license details."],
    warnings: ["Download installers and updates only from the software publisher or an official app store.", "Back up important app data before repair or reinstall steps."]
  },
  {
    id: "slow-computer", title: "Computer running slowly", category: "Software", difficulty: "Beginner",
    summary: "Identify common causes of sluggish performance and make low-risk improvements.",
    symptoms: ["Apps take longer than usual to open.", "The pointer or screen pauses during basic tasks.", "Startup takes longer or the fan stays active."],
    causes: ["Too many apps or browser tabs running at once.", "Low available storage or pending updates.", "Unwanted software or a hardware limitation."],
    steps: ["Restart the computer to clear temporary issues.", "Close apps and browser tabs you do not need.", "Check available storage using the operating system's storage settings and remove only files you recognize.", "Install operating system updates from the built-in update settings.", "Review startup apps and disable only those you recognize and do not need at startup.", "Run a scan with your installed, reputable security software if slowness started suddenly."],
    warnings: ["Do not delete system files or use unknown 'PC cleaner' downloads.", "Back up files before making storage or system changes."]
  },
  {
    id: "printer-offline", title: "Printer appears offline", category: "Software", difficulty: "Beginner",
    summary: "Restore communication between a computer and printer with connection and queue checks.",
    symptoms: ["Print jobs remain queued.", "The computer labels the printer offline.", "The printer is powered on but receives no jobs."],
    causes: ["A disconnected USB or Wi-Fi connection.", "A paused queue or stale print job.", "A printer driver or network change."],
    steps: ["Confirm that the printer is powered on and has paper and supplies.", "Check the printer display for any error and follow its on-screen instruction.", "For USB, reconnect the cable; for Wi-Fi, confirm both devices use the intended network.", "Open the computer's printer settings and confirm the correct printer is selected and not paused.", "Cancel only stuck jobs you recognize, then restart the printer and computer.", "If the issue continues, install the driver offered by the printer manufacturer."],
    warnings: ["Avoid third-party driver download sites.", "Do not force open a printer while it is operating."]
  },
  {
    id: "wifi-connected-no-internet", title: "Wi-Fi connected, but no internet", category: "Network", difficulty: "Beginner",
    summary: "Separate a device connection issue from a router or service outage using straightforward checks.",
    symptoms: ["The device shows Wi-Fi connected but websites do not load.", "Several apps report they are offline.", "Other devices on the same network may also be affected."],
    causes: ["A temporary router or modem issue.", "An internet service interruption.", "A device-specific network configuration problem."],
    steps: ["Check whether another device on the same Wi-Fi can access the internet.", "If multiple devices are offline, check your internet provider's outage information using mobile data if available.", "Restart the affected device and reconnect to the correct Wi-Fi network.", "If you control the router, follow the provider's instructions to restart it; allow it to fully reconnect.", "Temporarily turn off any VPN and retry only if your network policy allows it.", "If only one device remains affected, use its built-in network troubleshooter or contact your network administrator."],
    warnings: ["Do not factory-reset a router unless you have its setup details and permission.", "Never share your Wi-Fi password with untrusted support contacts."]
  },
  {
    id: "slow-wifi", title: "Wi-Fi is slow or keeps dropping", category: "Network", difficulty: "Intermediate",
    summary: "Improve wireless reliability by checking signal, network load, and equipment placement.",
    symptoms: ["Pages load slowly or video buffers.", "Wi-Fi disconnects in certain rooms.", "Speed varies widely across devices."],
    causes: ["Weak signal or physical interference.", "Many devices using the connection at once.", "Router software, placement, or service issues."],
    steps: ["Test the connection near the router and compare it with the problem location.", "Move closer to the router and reduce obstructions such as thick walls or metal cabinets.", "Pause large downloads or streaming on devices you control and test again.", "Restart the router using the manufacturer's normal restart procedure.", "Check for router firmware updates through its official administration tool or provider app.", "Contact your internet provider if wired and wireless speeds remain low or the connection frequently drops."],
    warnings: ["Do not change advanced router security settings unless you understand how to restore them.", "Use the router's official app or documentation; never share its admin password."]
  },
  {
    id: "dns-site-not-loading", title: "A website will not load", category: "Network", difficulty: "Intermediate",
    summary: "Determine whether a website, browser, or local connection is responsible for a page that will not open.",
    symptoms: ["One site fails while others load.", "A browser reports that the server cannot be found.", "The same site works on another device or network."],
    causes: ["A temporary website outage or mistyped address.", "Browser cache, extension, or DNS issue.", "A local network or filtering rule."],
    steps: ["Check the web address for spelling and try the site's homepage.", "Try the same page in a private window or another browser.", "Check whether other websites load and whether the site works on another trusted device.", "Restart the browser and install its updates from the official browser settings.", "If the problem affects multiple sites, restart your device and check your network connection.", "Ask your network administrator or provider about filters or DNS settings before changing them."],
    warnings: ["Do not bypass workplace, school, or parental security controls.", "Avoid entering passwords on lookalike pages reached through unfamiliar links."]
  },
  {
    id: "suspicious-email", title: "Spot and handle a suspicious email", category: "Security", difficulty: "Beginner",
    summary: "Recognize common phishing warning signs and report a suspicious message safely.",
    symptoms: ["A message pressures you to act urgently.", "The sender asks for a password, payment, or verification code.", "A link or attachment is unexpected or does not match the claimed sender."],
    causes: ["Phishing attempts impersonating people or organizations.", "Spoofed sender details or misleading links.", "A compromised sender account."],
    steps: ["Do not click links, open unexpected attachments, or reply with personal information.", "Check the sender address carefully, but remember it can be spoofed.", "Contact the claimed organization using a phone number or website you already trust.", "Use your email service's report-phishing or report-spam option.", "If you entered a password, change it from the official site using a trusted device and enable multifactor authentication.", "Tell your organization's IT team if the message arrived in a work or school account."],
    warnings: ["Never share one-time security codes or passwords with someone who contacted you.", "If money or sensitive data may be at risk, contact your bank or organization's security team promptly."]
  },
  {
    id: "secure-account", title: "Secure an account after suspicious activity", category: "Security", difficulty: "Intermediate",
    summary: "Take practical account-protection steps when you notice an unfamiliar sign-in or account change.",
    symptoms: ["An unfamiliar sign-in notification appears.", "Account settings or messages changed unexpectedly.", "You cannot sign in with the password you expect."],
    causes: ["A reused or exposed password.", "A phishing message or compromised device.", "An unauthorized recovery or session change."],
    steps: ["Use a trusted device and navigate directly to the service's official website or app.", "Change the password to a new, unique one that you do not use elsewhere.", "Review active sessions and sign out devices you do not recognize.", "Enable multifactor authentication and check recovery email addresses and phone numbers.", "Review recent account activity and contact the provider through its official support channel.", "If you reused the password, update it on other accounts, starting with email and financial accounts."],
    warnings: ["Do not use links in unexpected account alerts to sign in.", "If your device may be compromised, secure the account from another trusted device and seek professional help."]
  },
  {
    id: "malware-warning-signs", title: "Respond to possible malware", category: "Security", difficulty: "Advanced",
    summary: "Take cautious first steps if your device displays unexpected security alerts or suspicious behavior.",
    symptoms: ["Unfamiliar pop-ups or browser redirects appear.", "Security software reports a threat.", "Files or settings change without your action."],
    causes: ["A malicious download, attachment, or website.", "Unwanted browser extensions or bundled software.", "A false security warning designed to prompt a payment or download."],
    steps: ["Do not call phone numbers, pay, or install software shown in an unexpected pop-up.", "Disconnect the affected device from Wi-Fi or Ethernet if you suspect active compromise.", "From the device's already-installed, reputable security software, update its definitions and run a scan if safe to do so.", "Use a separate trusted device to change important passwords if you believe credentials were exposed.", "Back up essential documents carefully without copying unknown apps or executable files.", "Contact a qualified technician or your organization's IT/security team for persistent alerts, encrypted files, or business devices."],
    warnings: ["Do not attempt to remove unfamiliar system files manually.", "For work, school, or managed devices, contact IT before making changes.", "If ransomware is suspected, keep the device disconnected and seek professional incident-response help."]
  }
];
